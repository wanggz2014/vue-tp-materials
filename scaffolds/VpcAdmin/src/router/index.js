import iView from 'iview'
import { getToken,toUrl } from '@/libs/util'

const pageName=window.location.pathname.substring(1);

const LOGIN_PAGE_NAME = 'login.html'

export const beforeEach=(to, from, next) => {
  iView.LoadingBar.start()
  const token = getToken()
  if (!token && pageName !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    // 跳转到登录页
    window.location.href='/'+LOGIN_PAGE_NAME;
    next(false)
  } else{
    next()
  }
}

export const afterEach=(to) => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
}
