import { useMessages } from "composable-dashboard";

export const useArchivableComments = (
  initComments = [],
  initArchivedComments = []
) => {
  const comments = useMessages(initComments);
  const archivedComments = useMessages(initArchivedComments);

  return { comments, archivedComments };
};
