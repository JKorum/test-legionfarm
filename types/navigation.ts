import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack'

export enum Screens {
  Search = 'Search',
  Branches = 'Branches',
}

export type RootStackParamList = {
  [Screens.Search]: undefined
  [Screens.Branches]: { uri: string }
}

export type SearchProps = StackScreenProps<RootStackParamList, Screens.Search>
export type BranchesProps = StackScreenProps<
  RootStackParamList,
  Screens.Branches
>

export type SearchNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screens.Search
>
