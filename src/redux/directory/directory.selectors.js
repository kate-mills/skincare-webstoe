import { createSelector } from 'reselect'

// How much directory data do I need

const selectDirectory = state => state.directory

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
)
