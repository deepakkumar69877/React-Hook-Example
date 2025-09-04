
import FormikStateFormValidation from "./component/feature/FormikStateFormValidation";
import Forms from "./component/feature/Forms";
import UseEffectExample from "./component/hook/UseEffectExample";
import UseStateExample from "./component/hook/UseStateExample";

function App() {
  return (
    <div className="App">
    <UseStateExample />
    <UseEffectExample />
    <Forms />
    <FormikStateFormValidation />
    </div>
  );
}

export default App;
