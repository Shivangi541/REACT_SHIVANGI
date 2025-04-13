#PARCEL:

- Dev build
  -created server
- hot module refreshing
  -file watching algorithm: written in C++
- caching faster
- image optimization
- minification of the code
- bundling the files
- compessing
- start script for dev build
- build script for productin build
  -transpilation is done for jsx code by babel
- babel is installed by parcel in thenode modules
- two types of react compoonents
- class types and functional component
- react component is a normal javascript function
  -const Headcomponent = () => ({ title }, (<h1>React component</h1>));

-This syntax was incorrect. You cannot return multiple values like that.

-It should return a single JSX block — wrapped in a <div> or <> </> fragment if needed.

-Commented-out root.render(heading); — but heading wasn’t defined (likely meant title).

-Used proper JSX for rendering elements in Headcomponent.
