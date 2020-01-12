import { useMessages } from 'composable-dashboard';

export const useArchivableComments = () => {
  const comments = useMessages();
  const archivedComments = useMessages();

  return { comments, archivedComments };
};