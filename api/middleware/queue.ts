export interface Middleware {
   run: (...args: any[]) => any;
   key: string;
   priority?: number;
   [key: string]: any;
}
export type MiddlewarePriority = number;

export class Queue {
   private middlewares: Middleware[] = [];

   public add(middleware: Middleware, priority: MiddlewarePriority) {
      let contain = false;
      for (let i = 0; i < this.middlewares.length; i++) {
         if (this.middlewares[i].priority === priority) {
            throw new Error('Middleware with this priority already exists!');
         }
         if (this.middlewares[i].priority as number > priority) {
            this.middlewares.splice(i, 0, { ...middleware, priority });
            contain = true;
            break;
         }
      }
      if (!contain) {
         this.middlewares.push({ ...middleware, priority });
      }
   }

   public runAll() {
      this.middlewares.forEach((middleware) => middleware.run());
   }

   public getMiddleware(key: string) {
      return this.middlewares[key];
   }
}
