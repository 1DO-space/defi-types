REMOTE ?= origin
BRANCH ?= deploy

subtree:
	git subtree pull -P types $REMOTE $BRANCH
