# Cleo Frontend Interview
## Bills

### Get started
1. Fork this repo and clone to your machine.
2. Ensure Yarn is installed and run `yarn` to install dependencies.
3. Run `./node_modules/.bin/webpack --watch`.
4. In another terminal run `./node_modules/.bin/json-server --watch db.json`
5. Open `src/client/index.html` in a browser.

This should render a simple React component.

### Task

1. Create a Tabs component that allows multiple pages to be switched between.
2. One tab should show a list of bills. These can be found at http://localhost:3000/bills/. Bills have a flag `isBill` set to `true`.
3. Another tab should show a list of transactions which are potential bills. These can also be found at http://localhost:3000/bills/. Potential bills have a flag `isBill` set to `false`.
4. Under each bill row for both lists, should be a hidden list of transactions for that bill. This should show when the bill row is clicked.
5. Under the name of each bill should show a count of the transactions for it for example:
```
Vodafone
6 transactions
```
6. Add an action to the bills tab for each bill called "remove bill" which updates the relevant bill's `isBill` flag to `false`. You can use a `PATCH` request to `http://localhost:3000/bills/:id` using the id of the bill to update the bill resource.
7. Add an action to the potential bills tab for each potential bill called "Add as bill" which updates the relevant bill's `isBill` flag to `true`.
8. After each action, the lists should reflect the changes.

- Feel free to add LESS or SASS or even CSS.
- Feel free to add tests for any components written.
