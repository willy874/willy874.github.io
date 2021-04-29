/**
 * token = {
 *    expires_in: Number, (ms)
 *    token_expires_time: Number, (ms)
 *    access_token: String, (type + access)
 *    refresh_token: String (type + refresh)
 *  }
 */
export const tokenFormat = v => {
  const token = v
  if (typeof token === 'object') {
    return {
      expires_in: token.expires_in * 1000,
      token_expires_time: token.expires_in * 1000 + new Date().getTime(),
      access_token: `${token.token_type} ${token.access_token}`,
      refresh_token: `${token.token_type} ${token.access_token}`,
    }
  }
  return new Error('This token is an illegal structure')
}
