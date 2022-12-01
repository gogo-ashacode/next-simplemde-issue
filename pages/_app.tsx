import { MarkdownEditor } from "components/MarkdownEditor/MarkdownEditor";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("Hello World");

  return (
    <>
      <form>
        <label htmlFor="name">Name</label>
        <input name="name" />
        <label htmlFor="email">Email</label>
        <input name="email" />
        <label htmlFor="description" className="input__label">
          Short Description
        </label>
        <MarkdownEditor
          id="description"
          value={value}
          onChange={(value) => setValue(value)}
        />
      </form>
    </>
  );
}

export default App;
