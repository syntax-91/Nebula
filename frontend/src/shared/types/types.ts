export interface IUserdataAuth {
  username: string;
  password: string;

  displayName?: string;
}

export interface IPosts {
  ownerUsername: string;

  text: string;

  lastPostId: number;
  paginationFunc: () => void;
  createdAt: string;
  _count?: { likedBy: number; dislikedBy: number };
  id: number;
}
