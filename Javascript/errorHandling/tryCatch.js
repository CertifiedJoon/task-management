// // try...catch works synchronously
// try {
//   setTimeout(function () {
//     noSuchVariable;
//   }, 1000);
// } catch (err) {
//   console.log('Error'); // won't catch
// }

// // to trycatch async
// setTimeout(function () {
//   try {
//     noSuchVariable;
//   } catch {
//     console.log('error caught');
//   }
// }, 1000);

// error object
try {
  lalala;
} catch (err) {
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}

// real life application
let json = '{"age": 30}';
try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError('Incomplete data: no name');
  }

  console.log(user.name);
} catch (err) {
  console.log('Our apologies');
  console.log(err.name);
  console.log(err.message);
}
