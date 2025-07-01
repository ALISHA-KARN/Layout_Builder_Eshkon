export const blocks = [
  { type: "hero", label: "Hero Block" },
  { type: "twoColumn", label: "Two Column Row" },
  { type: "imageGrid", label: "Image Grid" },
];

export const renderBlock = (block) => {
  switch (block.type) {
    case "hero":
      return (
        <div className="block-content hero">
          <h2>Hero Block</h2>
          <p>This is a hero section with a headline and image.</p>
        </div>
      );
    case "twoColumn":
      return (
        <div className="block-content two-column">
          <div>
            <h3>Left Column</h3>
            <p>Some text here</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/100" alt="placeholder" />
          </div>
        </div>
      );
    case "imageGrid":
      return (
        <div className="block-content grid">
          <img src="https://via.placeholder.com/80" alt="1" />
          <img src="https://via.placeholder.com/80" alt="2" />
          <img src="https://via.placeholder.com/80" alt="3" />
          <img src="https://via.placeholder.com/80" alt="4" />
        </div>
      );
    default:
      return null;
  }
};
