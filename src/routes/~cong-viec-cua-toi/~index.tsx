import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cong-viec-cua-toi/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/forum/"!</div>
}
