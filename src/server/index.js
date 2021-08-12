
export const getTempData = () =>
  Array(1000)
    .fill('')
    .map((item, index) => {
      return {
        id: index,
        text: Math.random().toString(36),
        value:
          Math.floor(Math.random() * -1000) + Math.floor(Math.random() * 1000),
      };
    });

class Server {
  constructor() {
    this.data = getTempData();
    this.current_page = 1;
    this.limit = 10;
    this.next_page = null;
  }

  get(request = {page}) {
    const {page = 0} = request;

    return new Promise((resolve, reject) => {
      try {
        const response = {
          status: 200,
          data: {
            data: this.data.slice(page * this.limit, page * this.limit + 10),
            meta: {
              current_page: page,
              next_page: page < 100 ? page + 1 : null,
            },
          },
        };

        const serverAction = Math.floor(Math.random() * 3);

        if (serverAction > 0) {
          this.current_page = page;
          setTimeout(() => {
            resolve(response);
          }, 3000);

          return;
        }

        response.status = 500;
        response.data = {
          title: 'Oooopppsss',
          message: 'We have trouble with our server',
        };
        setTimeout(() => {
          reject(response);
        }, 3000);
      } catch (e) {
        console.log('Error in logic server', e);
      }
    });
  }

  putNewData() {
    this.data = [
      {
        id: Math.random() * 1000,
        text: Math.random().toString(36),
        value:
          Math.floor(Math.random() * -1000) + Math.floor(Math.random() * 1000),
      },
      ...this.data,
    ];
  }
}

const server = new Server();

setInterval(() => {
  server.putNewData();
}, 5000);

export default server;
