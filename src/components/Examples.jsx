import { useState } from "react";

import TabButton from "./TabButton";
import { EXAMPLES } from "../data";

export default function Examples() {
  // hooks like useState should be declared right at top level of the component functions,
  // and not in inner functions, conditionals or loop
  
  const [selectedTopic, setSelectedTopic] = useState(null);

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (<div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>);
  }

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'}        onSelect={() => handleSelect('jsx')       }>JSX</TabButton>
        <TabButton isSelected={selectedTopic === 'props'}      onSelect={() => handleSelect('props')     }>Props</TabButton>
        <TabButton isSelected={selectedTopic === 'state'}      onSelect={() => handleSelect('state')     }>State</TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
