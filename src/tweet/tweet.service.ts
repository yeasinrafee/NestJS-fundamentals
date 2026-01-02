import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';

@Injectable()
export class TweetService {
  constructor(private readonly userService: UserService) {}

  tweets: { text: string; date: Date; userId: number }[] = [
    { text: 'some tweet', date: new Date('2025-01-03'), userId: 1 },
    { text: 'some tweet', date: new Date('2025-01-03'), userId: 1 },
    { text: 'some tweet', date: new Date('2025-01-03'), userId: 2 },
  ];

  getTweets(userId: number) {
    const user = this.userService.getUserById(userId);
    const tweets = this.tweets.filter((tweet) => tweet.userId === userId);
    const response = tweets.map((t) => ({
      text: t.text,
      date: t.date,
      name: user?.name,
    }));
    return response;
  }
}
