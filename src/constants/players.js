const PLAYER_TABLE_COLS = {
  PLAYER: { label: "Player", sortable: true, sortableField: "full_name" },
  POSITION: {
    label: "Position",
    sortable: true,
    sortableField: "position.name",
  },
  NUMBER: { label: "No.", sortable: true, sortableField: "jersey_number" },
  SPORT: { label: "Sport", sortable: true, sortableField: "sport.name" },
  TEAM: { label: "Last Team", sortable: true, sortableField: "team.full_name" },
  STATUS: { label: "Status", sortable: true, sortableField: "status" },
};

export { PLAYER_TABLE_COLS };
