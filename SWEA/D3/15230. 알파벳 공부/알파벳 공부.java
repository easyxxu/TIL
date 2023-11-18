import java.io.*;
import java.util.*;

public class Solution {
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		
		int T = Integer.parseInt(br.readLine());
		for(int tc=1;tc<=T;tc++) {
			String az = "abcdefghijklmnopqrstuvwxyz";
			String input = br.readLine();
			int answer = 0;
			for(int i=0;i<input.length();i++) {
				char alphabet = az.charAt(i);
				char sh = input.charAt(i);
				if(alphabet == sh) {
					answer++;
				}else {
					break;
				}
			}
			sb.append("#"+tc+" "+answer+"\n");		
		}
		System.out.print(sb);
	}
}
