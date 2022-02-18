function FindProxyForURL(url, host)
{
  if (isPlainHostName(host) || dnsDomainIs(host, ".connerow.dev"))
    return "DIRECT";
  else
    return "PROXY proxy.connerow.dev:3000; DIRECT";
}