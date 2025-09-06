
import FormikStateFormValidation from "./component/feature/FormikStateFormValidation";
import Forms from "./component/feature/Forms";
import PassDataParentToChild from "./component/feature/PassDataParentToChild";
import UseEffectExample from "./component/hook/UseEffectExample";
import UseStateExample from "./component/hook/UseStateExample";

function App() {
  return (
    <div className="App">
    <UseStateExample />
    <UseEffectExample />
    <Forms />
    <FormikStateFormValidation />
    <PassDataParentToChild />
    </div>
  );
}

export default App;
