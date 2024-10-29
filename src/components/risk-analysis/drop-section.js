"use client"
import Dropdown from "./dropdown";

const Section = () => {
  return (
    <div className="flex flex-wrap">
      {/* First Row of 3 Dropdowns */}
      <Dropdown 
        title="Dropdown 1" 
        content={<p>This is the content for Dropdown 1</p>} 
      />
      <Dropdown 
        title="Dropdown 2" 
        content={<p>This is the content for Dropdown 2</p>} 
      />
      <Dropdown 
        title="Dropdown 3" 
        content={<p>This is the content for Dropdown 3</p>} 
      />

      {/* Second Row of 3 Dropdowns */}
      <Dropdown 
        title="Dropdown 4" 
        content={<p>This is the content for Dropdown 4</p>} 
      />
      <Dropdown 
        title="Dropdown 5" 
        content={<p>This is the content for Dropdown 5</p>} 
      />
      <Dropdown 
        title="Dropdown 6" 
        content={<p>This is the content for Dropdown 6</p>} 
      />
    </div>
  );
};

export default Section;
