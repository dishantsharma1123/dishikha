
# Dishikha 🌟

**Dishikha** is your ultimate React component library, handcrafted with care to save your precious time, reduce stress, and maybe even spark a little joy while coding. 🛠️✨

Say goodbye to boring, repetitive UI tasks, and hello to beautiful, functional components that _just work_! 🙌

---

## 📦 Installation

Getting started with **Dishikha** is as easy as:

```bash
npm install dishikha
```

# or

```bash
yarn add dishikha
```

Don’t forget to include the styles for the magic to happen:

```javascript
import "dishikha/dist/bundle.css";
```

---

## 🛠️ Usage Examples

Dishikha includes 9 powerful components (and counting). Here's how you can use them in your project:

### 1. Button 🖱️
*(Buttons so good, you'll want to click them all day long.)*

```javascript
import React from "react";
import { Button } from "dishikha";
import "dishikha/dist/bundle.css";

function App() {
  return (
    <div>
      <h1>Button Component Demo</h1>
      <Button label="Click Me" onClick={() => alert("Button clicked!")} />
    </div>
  );
}

export default App;
```

### 2. Card 🃏
*(Perfect for showing off content like it's on a stage.)*

```javascript
import React from "react";
import { Card } from "dishikha";
import "dishikha/dist/bundle.css";

function App() {
  return (
    <div>
      <h1>Card Component Demo</h1>
      <Card title="Dishikha Card">
        <p>Wow! So much content, all neatly packaged in a Card!</p>
      </Card>
    </div>
  );
}

export default App;
```

### 3. Checkbox ☑️
*(Check it, uncheck it, and repeat—because who doesn’t love toggles?)*

```javascript
import React from "react";
import { Checkbox } from "dishikha";
import "dishikha/dist/bundle.css";

function App() {
  return (
    <div>
      <h1>Checkbox Component Demo</h1>
      <Checkbox label="I agree to the terms and conditions (I didn’t read)." />
    </div>
  );
}

export default App;
```

### 4. Input 🔤
*(Because what's an app without some input from the user?)*

```javascript
import React from "react";
import { Input } from "dishikha";
import "dishikha/dist/bundle.css";

function App() {
  return (
    <div>
      <h1>Input Component Demo</h1>
      <Input placeholder="Type something awesome here..." />
    </div>
  );
}

export default App;
```

### 5. Modal ✨
*(Show important stuff, and hide it when you're done.)*

```javascript
import React, { useState } from "react";
import { Modal } from "dishikha";
import "dishikha/dist/bundle.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>Modal Component Demo</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>This is a cool modal! 🎉</p>
      </Modal>
    </div>
  );
}

export default App;
```

### 6. RadioButton 🔘
*(For when users need to pick just one favorite.)*

```javascript
import React from "react";
import { RadioButton } from "dishikha";
import "dishikha/dist/bundle.css";

function App() {
  return (
    <div>
      <h1>RadioButton Component Demo</h1>
      <RadioButton label="Option 1" />
      <RadioButton label="Option 2" />
    </div>
  );
}

export default App;
```

### 7. Select 🔽
*(Dropdowns that make choosing a breeze.)*

```javascript
import React from "react";
import { Select } from "dishikha";
import "dishikha/dist/bundle.css";

function App() {
  const handleSelectChange = (value) => alert(`You selected: ${value}`);

  return (
    <div>
      <h1>Select Component Demo</h1>
      <Select
        options={["Option 1", "Option 2", "Option 3"]}
        onChange={handleSelectChange}
      />
    </div>
  );
}

export default App;
```

### 8. Spinner 🔄
*(When things are loading, keep your users mesmerized.)*

```javascript
import React from "react";
import { Spinner } from "dishikha";
import "dishikha/dist/bundle.css";

function App() {
  return (
    <div>
      <h1>Spinner Component Demo</h1>
      <Spinner />
    </div>
  );
}

export default App;
```

### 9. Tooltip 💬
*(Add hints and helpful info like a pro.)*

```javascript
import React from "react";
import { Tooltip } from "dishikha";
import "dishikha/dist/bundle.css";

function App() {
  return (
    <div>
      <h1>Tooltip Component Demo</h1>
      <Tooltip text="Hello, I am a helpful tooltip!">
        <button>Hover over me</button>
      </Tooltip>
    </div>
  );
}

export default App;
```

---

## 🏆 Why Dishikha?

- **Easy to Use**: Plug and play components that work out of the box.
- **Fully Customizable**: Adapt components to your design system.
- **Developer-Friendly**: Clean, well-documented code that makes sense.
- **Time-Saving**: Get a head start on your next big project.

---

## 🤝 Contributing

Got ideas? Bugs? A wild feature request? Create an issue or fork the repo to contribute. Let's make Dishikha even better together! 🌟

---

## 📬 Feedback

We’d love to hear your thoughts! Drop us a message at `dishantsharma0903@gmail.com`.

---

Happy Coding! 💻 With ❤️ from **Dishikha**
