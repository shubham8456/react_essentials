import { useState } from "react";

import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";
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
      <Tabs
        // ButtonsContainer="menu" - "menu was later set as default value as per Lecture 69"
        // ButtonsContainer={Section}
        // ButtonsContainer if is a custom component, we pass it in curly braces
        buttons={
          <>
            <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}        onClick={() => handleSelect('jsx')       }>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}      onClick={() => handleSelect('props')     }>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}      onClick={() => handleSelect('state')     }>State</TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
