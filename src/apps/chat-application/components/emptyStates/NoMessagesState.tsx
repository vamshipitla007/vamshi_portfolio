import { EmptyState } from '../common/EmptyState';
import { Button } from '../common/Button';

export function NoMessagesState() {
  return (
    <EmptyState
      title="No messages yet"
      description="Start the conversation to share ideas, media, or quick updates."
      action={<Button variant="secondary">Compose</Button>}
    />
  );
}
