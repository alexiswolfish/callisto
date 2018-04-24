# Callisto Landing page

## Running the app

`yarn install` (if you don't have it already)

`yarn`

`yarn start`

## Libraries

I'm using three main external libraries for this project for ease of use and comfort

**Fela**: handles state driven styling [(docs)](http://fela.js.org/).

It generates atomic css for an incredibly performant bundle size and lets you reason about styling in a similar way to the rest of react. I've really enjoyed using it at Medium, and ported our implementation here. I don't like using the bindings/provider that come with `fela-react`, since they require you to wrap every component with the createComponent syntax which gets fairly bulky. In this app we're just passing the renderer around through the React context. The logic for the bindings is found in `styleProvider` and `classRenderer` in the components folder.

**Lodash**: functional helper libraryå

**Prettier**: for auto formatting

---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
