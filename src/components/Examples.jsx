import { useState } from "react";

import TabButton from "./TabButton";
import Section from "./Section";
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
    <Section title="Examples" id="examples">
      <menu>
        <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'}        onClick={() => handleSelect('jsx')       }>JSX</TabButton>
        <TabButton isSelected={selectedTopic === 'props'}      onClick={() => handleSelect('props')     }>Props</TabButton>
        <TabButton isSelected={selectedTopic === 'state'}      onClick={() => handleSelect('state')     }>State</TabButton>
      </menu>
      {tabContent}
    </Section>
  );
}
