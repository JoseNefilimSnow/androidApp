package com.maimo.guri.entregaapp;

import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;

import org.json.JSONException;
import org.json.JSONObject;

public class MainActivity extends AppCompatActivity {
    Button requestImg;
    Button rojo;
    Button ama;
    Button verde;
    Button azul;
    TextView question;
    TextView punish;
    ImageView ico;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        requestImg = (Button)findViewById(R.id.requestImg);
        rojo = (Button)findViewById(R.id.rojo);
        ama = (Button)findViewById(R.id.ama);
        verde = (Button)findViewById(R.id.verde);
        azul = (Button)findViewById(R.id.azul);
        question =(TextView)findViewById(R.id.question);
        punish=(TextView)findViewById(R.id.punish);
        ico =(ImageView)findViewById(R.id.ico);
        requestImg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                generateImg();

            }});

        rojo.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                rojo.setVisibility(View.GONE);
                ama.setVisibility(View.GONE);
                verde.setVisibility(View.GONE);
                azul.setVisibility(View.GONE);
                int y=1;
                generateIco(y);

            }});
        ama.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                rojo.setVisibility(View.GONE);
                ama.setVisibility(View.GONE);
                verde.setVisibility(View.GONE);
                azul.setVisibility(View.GONE);
                int y=4;
                generateIco(y);
            }});
        verde.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                rojo.setVisibility(View.GONE);
                ama.setVisibility(View.GONE);
                verde.setVisibility(View.GONE);
                azul.setVisibility(View.GONE);
                int y=3;
                generateIco(y);

            }});
        azul.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                rojo.setVisibility(View.GONE);
                ama.setVisibility(View.GONE);
                verde.setVisibility(View.GONE);
                azul.setVisibility(View.GONE);
                int y=2;
                generateIco(y);

            }});
    }

    private void generateIco(int y) {
        String url = "http://192.168.201.24:60000/PDM/img/" + y;

        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.GET, url, null, new Response.Listener<JSONObject>() {

                    @Override
                    public void onResponse(JSONObject response) {
                        try {
                            ico.setImageURI(Uri.parse(response.getString("url")));
                        } catch (JSONException e) {
                          //Error
                        }
                    }
                }, new Response.ErrorListener() {

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        //card.setText(error.getMessage());

                    }
                });
        //Ininiate queue
        RequestQueue queue = VolleySingleton.getInstance(this).getRequestQueue();
        queue.add(jsonObjectRequest);
    }

    private void generateImg() {

        String url = "http://192.168.201.24:60000/PDM/img";

        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.GET, url, null, new Response.Listener<JSONObject>() {

                    @Override
                    public void onResponse(JSONObject response) {
                        try {
                            question.setText("Pregunta:"+"\n"+ response.getString("question"));
                            punish.setText("Castigo:"+"\n"+ response.getString("punish"));
                        } catch (JSONException e) {
                            question.setText(e.getMessage());
                        }
                    }
                }, new Response.ErrorListener() {

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        //card.setText(error.getMessage());

                    }
                });
        //Ininiate queue
        RequestQueue queue = VolleySingleton.getInstance(this).getRequestQueue();
        queue.add(jsonObjectRequest);
    }
}
