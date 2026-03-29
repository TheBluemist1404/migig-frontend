## How to run this repo

For package management in this repo, we would use `yarn` instead of `npm` (You can DYOR on what `yarn` is and why it is typically better than `npm`)

Clone this repo:

```bash
git clone https://github.com/TheBluemist1404/migig-frontend.git
cd migig-frontend
```

Start the repo:

```bash
yarn install
yarn dev
```

Also note that lint rules are quite strict for commit, so make sure your message (within `git commit -m`) follow the convention, see more at [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

## How `Tanstack` routing work

This repo implement `Tanstack router` file-based method, which means that the file tree structure is what indicates the path to that page (look at directory `routes`)
Look into `vite.config.js` we will see

```js
tanstackRouter({
  autoCodeSplitting: true,
  routeFileIgnorePrefix: "-",
  routeFilePrefix: "~",
}),
```

which basically means that:

- File with `~` prefix would be _route file_ (file that would make up the path on the web)
- File with `-` prefix would be _ignored_ (file that would not make up the path on the web)
- Additionally, add another `_` prefix (like `~_auth`) make it a _layout route_ (file that would make up the path on the web, but would not take part in the path) \**E.g: In the file tree we see the path `routes/~_auth/~login.tsx`, this correspons to the path `/login` since `~_auth` is *layout route\*

## Migig design

v0 design to follow: https://v0.app/chat/micro-gigs-platform-landing-page-gJ6MtRIy5Sp?ref=K44F17

Routes structure:
| Trang | URL |
| --- | --- |
| Landing page | `/` |
| Đăng ký | `/dang-ky` |
| Đăng nhập | `/dang-nhap` |
| Hồ sơ cá nhân / Dashboard | `/ho-so` |
| Tìm việc (marketplace) | `/tim-viec` |
| Chi tiết công việc | `/tim-viec/[id]` (VD: `/tim-viec/1`) |
| Công việc của tôi | `/cong-viec-cua-toi` |
| Ví / Thanh toán | `/vi` |
| Tin nhắn | `/tin-nhan` |
