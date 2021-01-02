SHELL := /bin/bash
BUNDLE := cd website && bundle config set --local path 'vendor/bundle' && bundle
JEKYLL := $(BUNDLE) exec jekyll

.PHONY: cd all install update clean build serve push

all : install build

install:
	$(BUNDLE) install

update:
	$(BUNDLE) update
	
clean: 
	$(JEKYLL) clean

build:
	$(JEKYLL) build

serve:
	$(JEKYLL) serve --base ""

serve-old:
	cd old_website && bundle exec jekyll server --base ""

push: build
	echo "Synchronizing files"
	server=45.77.60.120
	rsync -avz --perms --exclude ".DS_Store" --exclude "." --delete-after -O -e \
	ssh "website/_site/" "root@45.77.60.120:public_html"
	echo "Synchronization Complete."
