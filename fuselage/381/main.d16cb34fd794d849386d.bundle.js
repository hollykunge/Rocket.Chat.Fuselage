(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1154:function(module,exports,__webpack_require__){"use strict";__webpack_require__(55).addons.setConfig({refs:{}})},1159:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(12);var colors=__webpack_require__(331),public_api=__webpack_require__(55),create=__webpack_require__(492),package_0=__webpack_require__(332),logo=__webpack_require__.p+"static/media/logo.d78c4948.svg";public_api.addons.setConfig({theme:Object(create.create)({base:"light",brandTitle:package_0.name,brandImage:logo,brandUrl:package_0.homepage,colorPrimary:colors.n500,colorSecondary:colors.b500})})},331:function(module){module.exports=JSON.parse('{"n100":"#f7f8fa","n200":"#f2f3f5","n300":"#eeeff1","n400":"#e4e7ea","n500":"#cbced1","n600":"#9ea2a8","n700":"#6c727a","n800":"#2f343d","n900":"#1f2329","b100":"#e8f2ff","b200":"#d1ebfe","b300":"#76b7fc","b400":"#549df9","b500":"#1d74f5","b600":"#095ad2","b700":"#10529e","b800":"#01336b","b900":"#012247","g100":"#e5fbf4","g200":"#c0f6e4","g300":"#96f0d2","g400":"#6ce9c0","g500":"#2de0a5","g600":"#1ecb92","g700":"#19ac7c","g800":"#158d65","g900":"#106d4f","r100":"#fddade","r200":"#fbb5be","r300":"#f98f9d","r400":"#f76a7d","r500":"#f5455c","r600":"#db0c27","r700":"#b30a20","r800":"#8b0719","r900":"#630512","y100":"#fff6d6","y200":"#ffecad","y300":"#ffe383","y400":"#ffd95a","y500":"#ffd031","y600":"#f3be08","y700":"#dfac00","y800":"#b68d00","y900":"#8e6d00","p100":"#f9effc","p200":"#edd0f7","p300":"#dca0ef","p400":"#ca71e7","p500":"#9f22c7","p600":"#7f1b9f","p700":"#5f1477","p800":"#4a105d","p900":"#350b42","o100":"#fde8d7","o200":"#fad1b0","o300":"#f7b27b","o400":"#f59b53","o500":"#f38c39","o600":"#e26d0e","o700":"#bd5a0b","o800":"#974809","o900":"#713607","white":"#ffffff"}')},332:function(module){module.exports=JSON.parse('{"name":"@rocket.chat/fuselage","version":"0.20.2","author":{"name":"Rocket.Chat","url":"https://rocket.chat/"},"license":"MIT","homepage":"https://github.com/RocketChat/Rocket.Chat.Fuselage#readme","repository":{"type":"git","url":"git+https://github.com/RocketChat/Rocket.Chat.Fuselage.git"},"bugs":{"url":"https://github.com/RocketChat/Rocket.Chat.Fuselage/issues"},"main":"index.js","types":"fuselage.d.ts","files":["index.js","fuselage.d.ts","dist"],"scripts":{"clean":"rimraf dist","start":"webpack --watch --mode development","build:prod":"webpack --mode production","build:dev":"webpack --mode development","build":"run-s clean build:prod build:dev","eslint":"eslint src","stylelint":"stylelint \'src/**/*.scss\'","fix":"stylelint --fix \'src/**/*.scss\'","lint":"run-s eslint stylelint","lint-staged":"lint-staged","test":"jest","prettier-format":"prettier --config .prettierrc \'src/**/*.{ts,tsx,js,jsx}\' --write","test:ci":"jest --runInBand","loki:test":"loki test --chromeDockerImage=chinello/alpine-chrome:latest --chromeFlags=\\"--headless --no-sandbox --disable-gpu --disable-features=VizDisplayCompositor\\" --verboseRenderer --requireReference --reactUri file:./storybook-static","loki:test-ci":"loki test --chromeFlags=\\"--headless --no-sandbox --disable-gpu --disable-features=VizDisplayCompositor\\" --verboseRenderer --requireReference --reactUri file:./storybook-static","loki:update":"loki update --chromeDockerImage=chinello/alpine-chrome:latest --chromeFlags=\\"--headless --no-sandbox --disable-gpu --disable-features=VizDisplayCompositor\\" --verboseRenderer --requireReference --reactUri file:./storybook-static","storybook":"start-storybook -p 6006","build-storybook":"build-storybook","build-storybook:loki":"cross-env NODE_ENV=loki build-storybook","update-storybook":"cross-env NODE_ENV=loki run-s build-storybook loki:update"},"peerDependencies":{"@rocket.chat/fuselage-hooks":"*","@rocket.chat/icons":"*","react":"^16.13.1","react-dom":"^16.13.1"},"dependencies":{"@rocket.chat/css-in-js":"^0.20.2","@rocket.chat/fuselage-tokens":"^0.20.1","invariant":"^2.2.4","react-keyed-flatten-children":"^1.2.0"},"devDependencies":{"@babel/core":"^7.11.5","@babel/eslint-parser":"^7.12.1","@babel/plugin-proposal-class-properties":"^7.10.4","@babel/plugin-transform-runtime":"^7.11.5","@babel/preset-env":"^7.11.5","@babel/preset-react":"^7.10.4","@rocket.chat/eslint-config":"^0.4.0","@rocket.chat/fuselage-hooks":"^0.20.1","@rocket.chat/fuselage-polyfills":"^0.20.1","@storybook/addon-essentials":"^6.1.11","@storybook/addon-jest":"^6.1.11","@storybook/addon-links":"^6.1.11","@storybook/addons":"^6.1.11","@storybook/react":"^6.1.11","@storybook/source-loader":"^6.1.11","@storybook/theming":"^6.1.11","autoprefixer":"^10.0.1","babel-loader":"^8.1.0","caniuse-lite":"^1.0.30001151","cssnano":"^4.1.10","eslint":"^7.13.0","eslint-config-prettier":"^6.15.0","eslint-plugin-import":"^2.22.0","eslint-plugin-mdx":"^1.8.2","eslint-plugin-prettier":"^3.1.4","eslint-plugin-react":"^7.20.6","eslint-plugin-react-hooks":"^4.1.0","identity-obj-proxy":"^3.0.0","jest":"^26.6.1","lint-staged":"^10.0.8","loki":"^0.25.1","normalize.css":"^8.0.1","npm-run-all":"^4.1.5","postcss":"^8.1.4","postcss-custom-properties":"^10.0.0","postcss-dir-pseudo-class":"^5.0.0","postcss-loader":"^4.0.4","postcss-logical":"^4.0.2","postcss-svg":"^3.0.0","prettier":"^2.1.2","prop-types":"^15.7.2","react":"^16.13.1","react-dom":"^16.13.1","react-live":"^2.2.2","rimraf":"^3.0.2","sass":"^1.26.10","sass-loader":"^10.0.1","style-loader":"^2.0.0","stylelint":"^13.7.0","stylelint-order":"^4.1.0","stylelint-prettier":"^1.1.2","stylelint-scss":"^3.18.0","webpack":"^5.2.0","webpack-bundle-analyzer":"^3.8.0","webpack-cli":"^4.1.0"},"jest":{"moduleNameMapper":{"\\\\.(css|scss)$":"<rootDir>/.jest/styleMock.js"},"setupFiles":["<rootDir>/.jest/setup.js"]},"loki":{"configurations":{"chrome.laptop":{"target":"chrome.docker","width":1366,"height":768,"deviceScaleFactor":1,"mobile":false,"fitWindow":false},"chrome.iphone7":{"target":"chrome.docker","preset":"iPhone 7"}}},"publishConfig":{"access":"public"},"gitHead":"f8467b8ffb6f90d91b46fbcdd5dca169235916a4"}')},503:function(module,exports,__webpack_require__){__webpack_require__(504),__webpack_require__(1159),__webpack_require__(691),__webpack_require__(1101),__webpack_require__(1103),__webpack_require__(1106),__webpack_require__(1136),__webpack_require__(1141),__webpack_require__(1144),__webpack_require__(1148),module.exports=__webpack_require__(1154)},578:function(module,exports){}},[[503,1,2]]]);