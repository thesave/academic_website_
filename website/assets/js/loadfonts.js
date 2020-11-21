/**
 * This function load font from web, stores it in localStorage and reuses on next page loads
 * Different to everything I found on the internet due to following facts
 * 1. Checks if the font is installed in the system and spend no time if it is
 * 2. Loads actual WOFF or WOFF2 fonts (if supported) and not bit base64 encoded version - so it faster
 * 3. Uses fetch API and FontFace API if available - it's cool!
 * 4. Return promises and uses jQuery for cases where native promises probably not available
 * 
 * @param fontName (Field for font-face)
 * @param fontUrl (full URL but without .woff nor .woff2 extensions - format will be selected automatically)
 * @param fontWeight (400 - normal, 700 - bold, etc)
 * @param fontStyle ('normal' - default, 'italic', 'opaque', etc)
 * @returns (promise and add to <html> element CSS class 'tsf-fontName-active' on font load)
 */
function loadFont(fontName, fontUrl, fontWeight, fontStyle) {
    var fWeight = fontWeight || 400,
        fStyle = fontStyle || 'normal',
        style = null,
        nativeFontApi = (typeof FontFace === 'function'),
        activeClass = 'tsf-' + fontName.toLowerCase().split(' ').join('-') + '-active';

    // We use static array of added font faces
    if (typeof loadFont.fontsLoaded == 'undefined') {
        // It has not... perform the initialization
        loadFont.fontsLoaded = [];
    }

    return new Promise(function (resolve, reject) {
        // Check if system has this font locally installed
        // https://drafts.csswg.org/css-font-loading/
        // To not complicated a lot we will do it only in case if native API supported
        if (nativeFontApi) {
            try {
                // it should throw on false;
                // TODO: it doesn't check weight/styles yet, neither it possible easily
                // Firefox has bug on it always returning TRUE, so, let's exclude it
                // https://bugzilla.mozilla.org/show_bug.cgi?id=1252821
                // Browsers that supports native FontFace API also supports Array.includes, so, go ahead
                // We check if we loaded that font before to avoid situation when document.fonts.check return TRUE ignoring font variants (always)
                if (!loadFont.fontsLoaded.includes(fontName) && (navigator.userAgent.indexOf('Firefox') === -1) &&
                    document.fonts.check(`1em '${fontName}'`)) {
                    // so if we are still hear it mean that the font is installed locally
                    // we don't need to do anything
                    console.log(`Font ${fontName} is installed locally, not loading`);
                    document.documentElement.classList.add(activeClass);
                    return resolve('User has this font installed locally'); // Return resolved Promise
                }
            }
            catch (e) { }
        }

        // Check if the font is at localStorage already
        if (localStorage.hasOwnProperty(fontUrl)) {
            console.log(`Font ${fontName} loaded from localStorage`);
            style = document.createElement('style');
            style.innerHTML = localStorage[fontUrl];
            document.head.appendChild(style);
            document.documentElement.classList.add(activeClass);
            loadFont.fontsLoaded.push(fontName);
            return resolve('CACHED Font loaded from localStorage'); // Return resolved Promise
        }

        // fetch version
        if (typeof window.fetch === 'function') {
            // This browser supports FETCH!
            // Browsers that currently support FETCH also support WOTFF2, so, we don't need to check
            // and they also support literal templates, const, FontFace and promises ;)
            // Will return native promise
            return fetch(`${fontUrl}.woff`)
                .then(function (response) {
                    // 404, 500 etc errors comes here to, so, we need to check for result
                    if (response.status > 100 && response.status < 400) {
                        return response.blob();
                    } else {
                        throw response.statusText;
                    }
                })
                .then(function (fontBlob) {
                    // We will add it to document with another shinning new CSS3 Font-Loading API
                    // https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API
                    var fnt = new FontFace(fontName, `url(${URL.createObjectURL(fontBlob)}) format('woff')`, { style: fStyle, weight: fWeight });
                    document.fonts.add(fnt);
                    fnt.loaded.then(function () {
                        console.log('Font loaded via Font Loading API');
                        document.documentElement.classList.add(activeClass);

                        // We store to localStorage only fonts that this browser actually can load
                        // Saving as dataUrl to localStorage
                        var fileReader = new FileReader();
                        // onload needed since Google Chrome doesn't support addEventListener for FileReader
                        fileReader.onload = function (evt) {
                            // Read out file contents as a Data URL
                            var result = evt.target.result;
                            // Store font Data URL in localStorage
                            try {
                                localStorage.setItem(fontUrl, `@font-face{font-family:'${fontName}';src:url(${result}) format('woff');font-weight:${fWeight};font-style:${fStyle};}`);
                                loadFont.fontsLoaded.push(fontName);
                            }
                            catch (e) {
                                console.error("Storage failed: " + e);
                            }
                        };
                        // Load blob as Data URL
                        fileReader.readAsDataURL(fontBlob);
                    });
                    fnt.load();
                })
                .catch(function (e) {
                    console.error(`Failed to load font from ${fontUrl}.woff with error: ${e}`);
                });
        } else {
            // non-fetch version, XMLHttpRequest
            // Create XHR and FileReader objects
            var xhr = new XMLHttpRequest(),
                fileReader = new FileReader();

            // We are loading WOFF version in this case
            xhr.open('GET', fontUrl + '.woff', true);
            xhr.timeout = 5000; // time in milliseconds. Is 5 seconds enough?
            // Set the responseType to blob
            xhr.responseType = 'blob';

            xhr.addEventListener('load', function () {
                if (xhr.status >= 200 && xhr.status < 400) {
                    console.log(fontName + 'Font loaded via XHR');
                    // Creating style element with Data URL 

                    style = document.createElement('style');
                    style.innerHTML = '@font-face{font-family:"' + fontName +
                        '";src:url(' + URL.createObjectURL(xhr.response) +
                        ') format("woff");font-weight:' + fWeight +
                        ';font-style:' + fStyle + ';}';
                    document.head.appendChild(style);
                    document.documentElement.classList.add(activeClass);

                    // This is non-Fetch way, so, we can use addEventListener as there is no Chrome here
                    fileReader.addEventListener('load', function (evt) {
                        // Read out file contents as a Data URL
                        var result = evt.target.result;
                        // Store Data URL in localStorage
                        try {
                            localStorage.setItem(fontUrl, '@font-face{font-family:"' + fontName +
                                '";src:url(' + result +
                                ') format("woff");font-weight:' + fWeight +
                                ';font-style:' + fStyle + ';}');
                            loadFont.fontsLoaded.push(fontName);
                        }
                        catch (e) {
                            console.error('Storage failed: ' + e);
                        }
                    });
                    // Load blob as Data URL
                    fileReader.readAsDataURL(xhr.response);

                    return resolve(xhr.response);

                } else {
                    return reject("Font Load HTTP error: " + xhr.status);
                }
            }, false);
            // Send XHR
            xhr.send();
        }
    });
}