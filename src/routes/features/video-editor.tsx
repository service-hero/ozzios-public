import { createFileRoute } from '@tanstack/react-router'
import { createPageHead } from '@/lib/seo'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { VideoEditorView } from '@/features/landing/views/features/VideoEditorView'

export const Route = createFileRoute('/features/video-editor')({
  head: () =>
    createPageHead({
      title: 'Video Editor',
      description:
        'AI video creation and editing. Promotional videos, social clips, and ads generated from text prompts.',
      path: '/features/video-editor',
    }),
  component: VideoEditorPage,
})

function VideoEditorPage() {
  return (
    <LandingLayout>
      <VideoEditorView />
    </LandingLayout>
  )
}
