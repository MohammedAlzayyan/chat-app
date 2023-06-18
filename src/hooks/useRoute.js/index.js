import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { signOut } from 'next-auth/react'
import useConversation from '../useConversation.js'

const useRoute = () => {
  const pathname = usePathname()
  const { conversationId } = useConversation()

  const routes = useMemo(
    () => [
      {
        Label: 'Chat',
        href: '/conversations',
        icon: 'icon',
        isActive: pathname === '/conversations' || !conversationId,
      },
      {
        Label: 'Chat',
        href: '/conversations',
        icon: 'icon',
        isActive: pathname === '/conversations' || !conversationId,
      },
      {
        Label: 'Chat',
        href: '/conversations',
        icon: 'icon',
        isActive: pathname === '/conversations' || !conversationId,
      },
    ],
    [pathname, conversationId],
  )

  return routes
}

export default useRoute
