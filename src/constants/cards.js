const CARD_TABLE_COLS = {
  PLAYER_NAME: { label: "Player", sortable: true, sortableField: "name" },
  DETAILS: { label: "Card", sortable: false, sortableField: "name" },
  TOTAL_GRADED: {
    label: "Total Graded",
    sortable: true,
    sortableField: "total_graded",
  },
  SPORT: {
    label: "Sport",
    sortable: true,
    sortableField: "card_set.sport.name",
  },
  YEAR: { label: "Year", sortable: true, sortableField: "card_set.year" },
  MANUFACTURER: {
    label: "Manufacturer",
    sortable: true,
    sortableField: "manufacturer.name",
  },
  SET: { label: "Set", sortable: true, sortableField: "card_set.name" },
  PARALLEL: {
    label: "Parallel",
    sortable: true,
    sortableField: "card_set.variety",
  },
  CARD_NUM: { label: "#", sortable: true, sortableField: "card_number" },
  ACTIONS: { label: "Actions", sortable: false },
};

//
// @note -- this client side sorting, it works, but... we shouldn't do it. the reason its here is
// because for card tables the basis was around pulling cards from elasticsearch where there
// are other tables whos data source is directly from postgres. what we should do is combine
// the search and list API's into a single interface so we can query them idempotently
// and leverage the rails app for sorting, not this crap.
//
const USER_CARD_TABLE_COLS = {
  COMP_VALUE: {
    label: "Comp Value",
    sortable: true,
    sortableField: "card_grade.current_value",
  },
  CREATED_AT: {
    label: <span style={{ whiteSpace: "nowrap" }}>Date Added</span>,
    sortable: true,
    sortableField: "created_at",
  },
  DETAILS: { label: "Card", sortable: true, sortableField: "card.name" },
  GRADE: {
    label: "Grade",
    sortable: true,
    sortableField: "card_grade.grade.grade",
  },
  NUMBER: {
    label: <span style={{ whiteSpace: "nowrap" }}>Card #</span>,
    sortable: true,
    sortableField: "card.card_number",
  },
  OWNER: {
    label: "Owner",
    sortable: false,
    sortableField: "card.user",
  },
  PAID: {
    label: "Total Cost",
    sortable: true,
    sortableField: "purchase_price",
  },
  PLAYER: {
    label: "Player",
    sortable: true,
    sortableField: "card.players.full_name",
  },
  POP: { label: "Pop", sortable: true, sortableField: "card_grade.grade_pop" },
  PUBLIC: { label: "Public", sortable: false, sortableField: "card.is_public" },
  SET: { label: "Set", sortable: true, sortableField: "card.card_set.name" },
  SHOWCASE_COUNT: {
    label: "Showcases",
    sortable: true,
    sortableField: "showcase_count",
  },
  SPORT: {
    label: "Sport",
    sortable: true,
    sortableField: "card.card_set.sport.name",
  },
  STATUS: { label: "Status", sortable: true, sortableField: "card_status" },
  VARIETY: {
    label: "Parallel",
    sortable: true,
    sortableField: "card.card_set.variety",
  },
  YEAR: { label: "Year", sortable: true, sortableField: "card.card_set.year" },
};

export { CARD_TABLE_COLS, USER_CARD_TABLE_COLS };
