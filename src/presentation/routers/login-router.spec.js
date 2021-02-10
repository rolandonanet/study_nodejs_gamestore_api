class LoginRouter {
  route (httpRequest) {
    if (!httpRequest.body.email || !httpRequest.body.password) {
      return {
        statusCode: 400
      }
    }
  }
}

describe('login router', () => {
  test('should return 400 if email was not provided', () => {
    const loginRouter = new LoginRouter()
    const httpRequest = {
      body: {
        password: 'anyPassword'
      }
    }
    const httpResponse = loginRouter.route(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
  })
})

describe('login router', () => {
  test('should return 400 if password was not provided', () => {
    const loginRouter = new LoginRouter()
    const httpRequest = {
      body: {
        email: 'any@email.com'
      }
    }
    const httpResponse = loginRouter.route(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
  })
})
