import { ThreadsModule } from './threads.module';

describe('ThreadsModule', () => {
  let threadsModule: ThreadsModule;

  beforeEach(() => {
    threadsModule = new ThreadsModule();
  });

  it('should create an instance', () => {
    expect(threadsModule).toBeTruthy();
  });
});
