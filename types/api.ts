export interface FetchedData {
  items: Entity[]
}

export interface Branch {
  name: string
}

export interface Entity {
  id: number
  name: string
  owner: { avatar_url: string }
  description: string
  watchers_count: number
  stargazers_count: number
  forks_count: number
  branches_url: string
}
