# Callisto Landing page

## Running the app

`yarn install` (if you don't have it already)

`yarn`

`yarn start`

## Libraries

I'm using three main external libraries for this project for ease of use and comfort

**Fela**: handles state driven styling [(docs)](http://fela.js.org/). It generates atomic css for an incredibly performant bundle size and let's you reason about styling in a similar way to the rest of react. I've really enjoyed using it at Medium, and ported our implementation here, which doesn't using the bindings/provider that come with `fela-react` to avoid having to wrap every component. The logic for the bindings is found in `styleProvider` and `classRenderer` in the components folder.

**Lodash**: functional helper libraryå

## **Prettier**: for auto formatting

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), which created an initial README with all kinds of howtos and troubleshooting help. You can find that original readme [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
