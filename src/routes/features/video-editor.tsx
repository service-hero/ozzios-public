import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { VideoEditorView } from '@/features/landing/views/features/VideoEditorView'

export const Route = createFileRoute('/features/video-editor')({
  component: VideoEditorPage,
})

function VideoEditorPage() {
  return (
    <LandingLayout>
      <VideoEditorView />
    </LandingLayout>
  )
}
