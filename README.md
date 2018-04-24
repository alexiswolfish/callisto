# Callisto Landing page

## Running the app

`yarn install` (if you don't have it already)

`yarn`

`yarn start`

## Overview

We have two providers that pass around a global theme object (that can set a color scheme for a given section/tree of components), and a renderer to condense the giant objects in the component files down to atomic css. Other than those, the app is fairly straight foward, with components in the `./components` directory, and rudimentary fonts + styles laid out in `./styles`

## Libraries

I included 3 external libraries for this project for ease of use and comfort

**Fela**: handles state driven styling [(docs)](http://fela.js.org/).

Fela generates atomic css (one propertly per class) for an incredibly performant bundle size and lets you reason about styling in a similar way to the rest of react. We've been using manual atomic css at medium for a while, and started exploring this library as an option when we move onto our new stack. I've really enjoyed the very limited exposure I've had to it so far and ported some of our implementation here.

I don't like using the bindings/provider that come with `fela-react`, since they require you to wrap every component with the createComponent syntax which gets fairly bulky. In this app we're just passing the renderer around through the React context. The logic for the bindings is found in `styleProvider` and `classRenderer` in the components folder.

**Lodash**: functional helper library

**Prettier**: for auto formatting

---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
