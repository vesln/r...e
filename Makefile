TESTS = $(shell find test/ -name "*.test.js" -type f | sort)
UI = tdd
REPORTER = dot

check: test

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--require ./test/support/bootstrap.js \
		--ui $(UI) \
		$(TESTS)

.PHONY: test
