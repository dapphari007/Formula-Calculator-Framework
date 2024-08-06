package com.example.myapplication

import android.os.Bundle
import android.webkit.JsResult

import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.app.AlertDialog


class MainActivity : AppCompatActivity() {
    private var webView: WebView? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webView)

        // Enable JavaScript (if needed)
        webView!!.settings.javaScriptEnabled = true

        webView!!.settings.cacheMode = WebSettings.LOAD_NO_CACHE

        // Use the extension function directly on the WebView instance
        webView!!.setAppCacheEnabled(false)
    
        webView!!.webChromeClient = MyWebChromeClient()

        val yourMachineIpAddress = "192.168.81.226"
        webView!!.loadUrl("http://$yourMachineIpAddress:5500/formulas.html")

        // Ensure links within the WebView open in the WebView itself
        webView!!.webViewClient = WebViewClient()
    }

    class MyWebChromeClient : WebChromeClient() {
        class MyWebChromeClient : WebChromeClient() {
            override fun onJsAlert(
                view: WebView,
                url: String,
                message: String,
                result: JsResult
            ): Boolean {
                // Handle the alert by showing a dialog or performing some action
                // For simplicity, this example shows an AlertDialog
                AlertDialog.Builder(view.context)
                    .setMessage(message)
                    .setPositiveButton(android.R.string.ok, null)
                    .show()
                result.confirm()
                return true
            }
        }

    }
}

// Extension function for WebView
fun WebView.setAppCacheEnabled(b: Boolean) {

}
