import ReactTags from "react-tag-autocomplete";

const PlayerTagSearchFieldView = ({
  tags,
  suggestions,
  onDelete,
  onAddition,
  onInput,
}) => (
  <ReactTags
    tags={tags}
    suggestions={suggestions}
    onDelete={onDelete}
    onAddition={onAddition}
    onInput={onInput}
  />
);

export default PlayerTagSearchFieldView;
