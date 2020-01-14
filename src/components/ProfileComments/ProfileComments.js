import React from 'react';
import { Tabs, TabPanel } from 'composable-dashboard';
import ArchivedComment from './ArchivedComment';
import { ProfileCommentsContainer } from './style';
import { useArchivableComments } from '../../hooks/useArchivableMessages';
import ProfileCommentPanel from './ProfileCommentPanel';

export default ({ initComments, initArchivedComments }) => {
  const { comments, archivedComments } = useArchivableComments(initComments, initArchivedComments);

  const restoreComment = comment => () => {
    archivedComments.removeMessage(comment.id);
    comments.addMessage(comment);
  }

  const deleteComment = comment => () => {
    archivedComments.removeMessage(comment.id);
  }

  const tabs = [{ value: 'comments', label: 'Pet Comments'}, { value: 'archive', label: 'Archived Comments'}]

  return (
    <ProfileCommentsContainer>
      <Tabs tabs={tabs} defaultTab="comments">
        <ProfileCommentPanel comments={comments} archivedComments={archivedComments} />
        
        <TabPanel forTab="archive">
          {archivedComments.messages.length > 0 ? (
            archivedComments.messages.map(comment => (
              <ArchivedComment
                key={comment.id}
                deleteComment={deleteComment(comment)}
                restoreComment={restoreComment(comment)}
              >
                {comment.text}
              </ArchivedComment>
            ))) : (
              <p>No Archived Comments</p>
            )
          }
        </TabPanel>
      </Tabs>
    </ProfileCommentsContainer>
  );
};