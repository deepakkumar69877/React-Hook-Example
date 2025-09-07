
import FormikStateFormValidation from "./component/feature/FormikStateFormValidation";
import Forms from "./component/feature/Forms";
import PassDataParentToChild from "./component/feature/PassDataParentToChild";
import UseEffectExample from "./component/hook/UseEffectExample";
import UseStateExample from "./component/hook/UseStateExample";
import './App.css';
import PassDataChildToParent from "./component/feature/PassDataChildToParent";

function App() {
  return (
    <div className="App">
    <UseStateExample />
    <UseEffectExample />
    <Forms />
    <FormikStateFormValidation />
    <PassDataParentToChild />
    <PassDataChildToParent />
    </div>
  );
}

export default App;
