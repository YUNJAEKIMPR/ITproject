const RecipeInstruction = (props) => {
  return (
    <div className="position-relative m-4">
      <div className="progress" style={{ height: "1px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "50%" }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax={(props.instructions.length - 1) * 50}
        ></div>
      </div>
      {props.instructions.map((instruction, index) => {
        return (
          <button
            key={index}
            type="button"
            className={`position-absolute top-0 start-${
              index * 50
            } translate-middle btn btn-sm btn-primary rounded-pill`}
            style={{ width: "3rem", height: "3rem" }}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={instruction}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default RecipeInstruction;
