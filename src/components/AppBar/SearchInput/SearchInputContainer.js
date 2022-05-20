import SearchInputView from "./SearchInputView";

const SearchInputContainer = ({
  onCancel,
  onChange,
  onSubmit,
  showCancel,
  isMobile,
}) => {
  return (
    <SearchInputView
      onCancel={onCancel}
      onChange={onChange}
      onSubmit={onSubmit}
      showCancel={showCancel}
      isMobile={isMobile}
    />
  );
};

export default SearchInputContainer;
