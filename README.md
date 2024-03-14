# import/export

There are two types of exports

- Default export
  => Default export we use when we have to export only one Variable/Component from the file
  Syntax :

  export default Component
  import Component from "path"

- Name export

  In this Case when we have to export multiple variables/Component from same file we use nam export

  Syntax => export const var1
  export const var2

  import {var1, var2} from "path";

# React Hooks

    React hooks are basically Special functions provided by React to us for Faster DOM manipulations and to maintain
    the state between Data Layer and Ui laYer.

    useState and useEffect are two functions provided by React to us.

    Syntax =>
    const [var, setVar] = useState(Default Value);
    var => var is referred to as state variable and whenever it is updates, the component is re-rendered into the DOM
    setVar => this variable 'var' cannot be directly updated, to change it, useState provides us a second value in [var, setVar]
    on which if we pass the value, it gets updated and component is re-rendered;
