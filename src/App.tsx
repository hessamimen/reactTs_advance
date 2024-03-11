import { useRef } from "react";
import Input from "./components/Input";
import Form from "./components/Form";
import Button from "./components/Button";

function App() {
  // const input = useRef<HTMLInputElement>(null);

  function handleSave(data: unknown) {
    console.log("data", data);
    const extractedData = data as { name: string; age: string };
    // console.log(extractedData);
  }
  return (
    <main>
      <Form onSave={handleSave}>
        <Input type="text" label="name" id="name" />
        <Input type="number" label="age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
