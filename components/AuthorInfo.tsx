import Image from 'next/image'

interface AuthorInfoProps {
  author: {
    name: string
    bio: string
    avatar: string
  }
}

export default function AuthorInfo({ author }: AuthorInfoProps) {
  return (
    <div className="flex items-center space-x-4 mt-8 p-4 bg-secondary rounded-lg">
      <Image
        src={author.avatar || "/placeholder.svg"}
        alt={author.name}
        width={64}
        height={64}
        className="rounded-full"
      />
      <div>
        <h3 className="font-semibold">{author.name}</h3>
        <p className="text-sm text-muted-foreground">{author.bio}</p>
      </div>
    </div>
  )
}

